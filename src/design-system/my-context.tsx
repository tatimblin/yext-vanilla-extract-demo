import React from "react";
import { designSystem } from "./index.css";

/**
 * useContext allows you to pass data easily to grandchildren,
 * the react docs recommend it for global state information that
 * isn't expected to change often. We could consider passing data
 * through here as our main config for default settings (like 24 hour
 * clock) and node_module styling
 */

export const config = {
  Price: {
    props: {
      currency: '$',
    },
    styles: {
      prefix: '',
      suffix: designSystem({
        fontSize: 'xs',
      }),
    },
  },
};

export const MyContext = React.createContext(config);
