import cn from 'clsx';
import type { KeyboardEvent, ChangeEvent } from 'react';

export type InputFieldProps = {
  className?: string;
  label: string;
  inputId?: string;
  inputValue: string | null;
  inputLimit?: number;
  useTextArea?: boolean;
  errorMessage?: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleKeyboardShortcut?: ({
    key,
    ctrlKey
  }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function InputField({
  className,
  label,
  inputId,
  inputValue,
  inputLimit,
  useTextArea,
  errorMessage,
  handleChange,
  handleKeyboardShortcut
}: InputFieldProps): JSX.Element {
  const slicedInputValue = inputValue?.slice(0, inputLimit) ?? '';

  const inputLength = slicedInputValue.length;
  const isHittingInputLimit = inputLimit && inputLength > inputLimit;

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div
        className={cn(
          'relative rounded ring-1 transition-shadow duration-200 bg-neutral-900/50',
          errorMessage
            ? 'ring-accent-red'
            : `ring-neutral-600 focus-within:ring-2 
                 focus-within:!ring-white/50 dark:ring-neutral-700`
        )}
      >
        {useTextArea ? (
          <textarea
            className='peer mt-6 w-full resize-none bg-inherit px-3 pb-1
                       placeholder-transparent outline-none transition'
            id={inputId}
            placeholder={inputId ?? label}
            onChange={!isHittingInputLimit ? handleChange : undefined}
            onKeyUp={handleKeyboardShortcut}
            value={slicedInputValue}
            rows={3}
          />
        ) : (
          <input
            className='peer mt-6 w-full bg-neutral-900/5 px-3 pb-1
                       placeholder-transparent outline-none transition'
            id={inputId}
            type='text'
            placeholder={inputId ?? label}
            onChange={!isHittingInputLimit ? handleChange : undefined}
            value={slicedInputValue}
            onKeyUp={handleKeyboardShortcut}
          />
        )}
        <label
          className={cn(
            `group-peer absolute left-3 translate-y-1 text-sm
             text-light-secondary transition-all peer-placeholder-shown:translate-y-3
             peer-placeholder-shown:text-lg peer-focus:translate-y-1 peer-focus:text-sm`,
            errorMessage
              ? '!text-accent-red peer-focus:text-accent-red'
              : 'ppeer-focus:text-white/50'
          )}
          htmlFor={inputId}
        >
          {label}
        </label>
        {inputLimit && (
          <span
            className={cn(
              `absolute right-3 top-0 translate-y-1 text-sm text-light-secondary transition-opacity 
               duration-200 peer-focus:visible peer-focus:opacity-100 dark:text-dark-secondary`,
              errorMessage ? 'visible opacity-100' : 'invisible opacity-0'
            )}
          >
            {inputLength} / {inputLimit}
          </span>
        )}
      </div>
      {errorMessage && (
        <p className='text-sm text-accent-red'>{errorMessage}</p>
      )}
    </div>
  );
}
