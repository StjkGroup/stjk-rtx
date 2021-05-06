import React from 'react';
import Layout from '../layout';
import {useRouter} from 'next/router';
import {PATH_PREFIX} from '@/env';

const Root = ({children}: any) => {

  const router = useRouter();
  const path = router.pathname.substr((PATH_PREFIX+'/').length, router.pathname.length-(PATH_PREFIX+'/').length);

  const root: any = {
    'login': <>{children}</>,
    'registry': <>{children}</>,
    'default': <Layout>{children}</Layout>,
  }

  return root[path] || root['default'];
}

export default Root;