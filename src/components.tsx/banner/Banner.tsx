import * as React from 'react';
import { PreparationMesagge } from '../../utils/enums';

interface PropsBanner {
  message: PreparationMesagge;
}

const Banner = ({ message }: PropsBanner) => {
  return (
    <div
      id="banner"
      tabIndex={-1}
      className="flex w-3/4 gap-8 justify-between items-start py-3 px-4  bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
    >
      <p className="text-center w-full text-2xl font-light text-gray-500 dark:text-gray-400">
        <strong>{message}</strong>
      </p>
    </div>
  );
};

export default Banner;
