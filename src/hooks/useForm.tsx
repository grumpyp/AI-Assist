import { useState } from 'react';

export function useForm(initialValues: any) {
  const [formState, setFormState] = useState(initialValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return [formState, handleInputChange];
}
