import { useState } from 'react';

export const ExampleWithTextArea = () => {
  const maxLength: number = 30;
  const [isTextareaOverflowing, setTextareaOverflowing] =
    useState<boolean>(false);

  return (
    <>
      <div className="container flex justify-content-center mt-5">
        <h2 className="p-5 mx-auto col-auto">Textarea Exercise</h2>
        <textarea
          className="mx-auto col-auto"
          maxLength={maxLength}
          onChange={(e) =>
            setTextareaOverflowing(e.target.value.length == maxLength)
          }
          placeholder="Max 30 caratteri"
        ></textarea>

        {isTextareaOverflowing && (
          <p className="mx-auto col-auto">
            Textarea is overflowing! max {maxLength} characters!
          </p>
        )}
      </div>
    </>
  );
};
