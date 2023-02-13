import * as React from 'react';
import { ButtonMessages } from '../../utils/enums';
interface GeneralButtonProps {
  message: ButtonMessages;
  handleClick?: () => void;
}
const GeneralButton = ({ message, handleClick }: GeneralButtonProps) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white w-full"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
          {message}
        </span>
      </button>
    </div>
  );
};

export default GeneralButton;
