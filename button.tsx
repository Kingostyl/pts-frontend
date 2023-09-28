// // import clsx from "clsx";
// import clsx from "clsx";
// import React, { Children } from "react";

// type Variant = "solid" | "outline";
// type ColorSchema = "blue" | "red" | "green" | "rose" | "pink";

// interface ButtonProps {
//   title: string;
//   isDisabled?: boolean;
//   variant?: Variant;
//   colorSchema: ColorSchema;
//   width?: any;
// }

// const buton: React.FC<
//   ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
// > = ({
//   title,
//   isDisabled = false,
//   variant,
//   width = 24,
//   colorSchema,
//   ...props
// }) => {
//   return (
//     <button
//       disabled={isDisabled}
//       className={clsx("w-20 h-8 m-1 rounded ", {
//         "bg-blue-500 text-white": colorSchema === "blue" && variant === "solid",
//         "bg-red-500 text-white": colorSchema === "red" && variant === "solid",
//         "bg-green-500 text-white":
//           colorSchema === "green" && variant === "solid",
//         "bg-rose-500 text-white": colorSchema === "rose" && variant === "solid",
//         "bg-pink-500 text-white": colorSchema === "pink" && variant === "solid",
//         "opacity-25": isDisabled === true,
//         "border-blue-500 border text-blue-600":
//           colorSchema === "blue" && variant === "outline",
//         "border-red-500 border text-red-600":
//           colorSchema === "red" && variant === "outline",
//         "border-green-500 border text-green-400":
//           colorSchema === "green" && variant === "outline",
//         "border-rose-500 border text-rose-400":
//           colorSchema === "rose" && variant === "outline",
//         "w-full": width === "full",
//         "w-24": width === 24,
//       })}
//       {...props}
//     >
//       {title}
//     </button>
//   );
// };

// export default buton;

import clsx from "clsx";
import React, { Children } from "react";

type warna = "grey" | "merah" | "kuning" | "biru";

interface ButtonProps {
  title: string;
  warna: warna;
  height?: any;
  width?: any;
}

const buton: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, warna, width, height, ...props }) => {
  return (
    <button
      className={clsx(
        "w-auto text-xl hover:bg-blue-300/50 transition-all duration-75 text-white m-1 rounded",
        {
          "bg-gray-400  h-20": warna === "grey",
          "bg-red-500 ": warna === "merah",
          "bg-yellow-500 h-20": warna === "kuning",
          "bg-blue-500 h-20": warna === "biru",
          "h-48": height === 48,
          "w-[19.50rem]": width === 80,
        }
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default buton;

