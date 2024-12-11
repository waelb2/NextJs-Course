import React, { ReactNode } from "react";

declare global {
  export interface RootLayoutProps {
    children: ReactNode;
  }
  export interface PostInterface {
    title: string;
    tag: string;
  }
  export interface PostFormProps {
    type: string;
    post: PostInterface | null;
    setPost: React.Dispatch<React.SetStateAction<PostInterface>>;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    submitting: boolean;
  }
  export interface UserSession {
    userId: string;
    user: string;
    email: string;
    image: string;
  }
}
