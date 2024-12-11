import Link from "next/link";
import React from "react";

const Form: React.FC<PostFormProps> = ({
  type,
  post,
  setPost,
  handleSubmit,
  submitting,
}) => {
  return (
    <section className="w-full max-full flex-start flex-col">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient">{type} Post</span>{" "}
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
        </label>
        <textarea
          value={post?.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Write your prompt here..."
          required
          className="form_textarea p-4"
        />
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {"  "} (#product, #webDev...)
          </span>
        </label>
        <input
          value={post?.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="#tag"
          required
          className="form_input p-4"
        />
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-orange-600 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
