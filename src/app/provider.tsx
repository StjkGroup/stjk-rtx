/**
 * Create by fay on 4/22/20 10:31 下午
 */
import ThemeProvider from '@stjk/ui/provider/ThemeProvider';
import React from "react";
import Root from './root';

const Provider = ({children}: any) => {

  return (
    <ThemeProvider>
      <Root>
        {children}
      </Root>
    </ThemeProvider>
  )
};

export default Provider;