// import React from "react";
// import CustomButton from "./CustomButton";
//{ prompt, setPrompt, generatingImg, handleSubmit }
const AIPicker = () => {
  return (
    <div className="aipicker-container">
      {/* <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      /> */}
      <div className="flex flex-wrap gap-3">
        <p className="text-xs text-white">AI Feature Coming Soon!</p>
        {/* {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )} */}
      </div>
    </div>
  );
};

export default AIPicker;
