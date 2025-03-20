import React, { ChangeEvent, FormEvent, useState } from 'react';

type ReturnType<T> = {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
  reset: () => void;
};

const useForm = <
  T extends {
    [k: string]: string;
  }
>(
  initialState: T,
  onSubmit: (state: T) => void
): ReturnType<T> => {
  const [state, setState] = useState<T>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setState(s => {
      return { ...s, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    onSubmit(state);
  };

  const reset = () => setState(initialState);

  return {
    state,
    setState,
    handleInputChange,
    handleSubmit,
    reset,
  };
};

export default useForm;
