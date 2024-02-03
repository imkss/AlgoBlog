import Link from "next/link";
import { useState } from "react";

const Form = ({ type, post, setPost, submitting, hanndlSubmit }) => {


  const [banner, setBanner] = useState({ myFile: "" });
  const [preview, setPreview] = useState(null); // Added for image preview


  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await conBase64(file);
    setBanner(base64);

    // Create a preview of the selected image

    const reader = new FileReader();
    reader.onloadend = () => {
      const previewUrl = reader.result;
      setPreview(previewUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

// Simply just converting the file to base64

  function conBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="text-left desc max-w-md">
        {type} and share your thoughts with the world.
      </p>
      <form
        onSubmit={hanndlSubmit}
        className="mt-7 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Lerning
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="font-normal">
              #programming #ai #ml #fullstack #devops
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>



        <label>
        <div>
            <input
              type="file"
              placeholder="Enter Promotion banner"
              name="banner"
              accept=".jpg,.jpeg,.png"
              className="form-control mb-2 p-2  bg-white"
              onChange={(e) => handleFileUpload(e)}
              required
            />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                width="50em"
                height="50em"
                style={{ marginTop: "10px" }}
              />) :(
              <span>Select an image</span>
            
            )}
          </div>
          </label>

        <div className="flex-end mx-3 mb-3 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange text-white rounded-full"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
