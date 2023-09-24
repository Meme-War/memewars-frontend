import m from "mithril";
import { cc } from "mithril-cc";

type TabBarAttrs = {};

export const TabBar = cc<TabBarAttrs>(function () {
  return ({}) => {
    return (
      <div class="flex flex-row">
        <div class="flex-1 text-center text-black text-sm font-normal font-['Audiowide'] border border-black">
          <div class="flex flex-col justify-center items-center">
            <svg
              width={32}
              height={31}
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2917 9.04166H27.625M27.625 9.04166V19.375M27.625 9.04166L17.2917 19.375L12.125 14.2083L4.375 21.9583"
                stroke="black"
                strokeWidth="1.34783"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          PROFILE
        </div>
        <div class="flex-1 text-center text-black text-sm font-normal font-['Audiowide'] border border-black">
          <div class="flex flex-col justify-center items-center">
            <svg
              width={32}
              height={31}
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11.625V15.5M16 15.5V19.375M16 15.5H19.875M16 15.5H12.125M27.625 15.5C27.625 17.0266 27.3243 18.5383 26.7401 19.9487C26.1559 21.3591 25.2996 22.6406 24.2201 23.7201C23.1406 24.7996 21.8591 25.6559 20.4487 26.2401C19.0383 26.8243 17.5266 27.125 16 27.125C14.4734 27.125 12.9617 26.8243 11.5513 26.2401C10.1409 25.6559 8.85936 24.7996 7.77988 23.7201C6.7004 22.6406 5.84411 21.3591 5.2599 19.9487C4.67569 18.5383 4.375 17.0266 4.375 15.5C4.375 12.4169 5.59977 9.45999 7.77988 7.27988C9.95999 5.09977 12.9169 3.875 16 3.875C19.0831 3.875 22.04 5.09977 24.2201 7.27988C26.4002 9.45999 27.625 12.4169 27.625 15.5Z"
                stroke="black"
                strokeWidth="1.29167"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          CREATE
        </div>
        <div class="flex-1 text-center text-black text-sm font-normal font-['Audiowide'] border border-black ">
          <div class="flex flex-col justify-center items-center">
            <svg
              width={32}
              height={31}
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6528 19.1528C18.6839 20.1214 17.37 20.6656 16 20.6656C14.63 20.6656 13.3161 20.1214 12.3472 19.1528M12.125 12.9167H12.1379M19.875 12.9167H19.8879M27.625 15.5C27.625 17.0266 27.3243 18.5383 26.7401 19.9487C26.1559 21.3591 25.2996 22.6406 24.2201 23.7201C23.1406 24.7996 21.8591 25.6559 20.4487 26.2401C19.0383 26.8243 17.5266 27.125 16 27.125C14.4734 27.125 12.9617 26.8243 11.5513 26.2401C10.1409 25.6559 8.85936 24.7996 7.77988 23.7201C6.7004 22.6406 5.84411 21.3591 5.2599 19.9487C4.67569 18.5383 4.375 17.0266 4.375 15.5C4.375 12.4169 5.59977 9.45999 7.77988 7.27988C9.95999 5.09977 12.9169 3.875 16 3.875C19.0831 3.875 22.04 5.09977 24.2201 7.27988C26.4002 9.45999 27.625 12.4169 27.625 15.5Z"
                stroke="black"
                strokeWidth="1.34783"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          TRENDING
        </div>
      </div>
    );
  };
});
