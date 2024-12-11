"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePrompt = () => {
  const [post, setPost] = useState<PostInterface | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { data: session } = useSession() as { session: UserSession };
  const router = useRouter();

  const createPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // fetching the new prompt to the backend
      const response = await fetch("/api/prompt", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.userId,
          prompt: post?.title,
          tag: post?.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
    return;
  };
  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        handleSubmit={createPrompt}
        submitting={submitting}
      />
    </div>
  );
};

export default CreatePrompt;
