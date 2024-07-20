import { SignIn } from '@clerk/clerk-react';
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <SignIn  fallbackRedirectUrl="/"/>
    </div>
  );
};

export default SignInPage;
