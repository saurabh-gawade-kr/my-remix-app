/*
The ?url query parameter can be used when you want to import the CSS file as a URL string
(rather than directly including the CSS styles in the JavaScript bundle). 
This would typically be useful if you want to reference the location of the CSS file
after it's been processed by a bundler like Webpack or Vite.
*/
import newNoteStyle from "./NewNotes.css?url";

export default function NewNotes() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto border border-white-700 p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-3xl text-grey-700 text-center"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block w-full border border-grey-700 p-2 rounded shadow-sm focus:outline-none focus:border-indigo-500"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-3xl text-grey-700 text-center"
          >
            Content
          </label>
          <textarea
            rows={4}
            id="message"
            name="message"
            className="block w-full border border-grey-700 p-2 rounded shadow-sm focus:outline-none focus:border-indigo-500"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <button className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

//! Surface Styling
export function links() {
  return [
    {
      rel: "stylesheet",
      href: newNoteStyle,
    },
  ];
}
