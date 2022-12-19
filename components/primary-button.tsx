const PrimaryButton = ({ textField, isLoading }: any) => {
  return (
    <>
      <div className="flex justify-center align-middle">
        <button
          disabled={isLoading}
          className="rounded-full flex justify-center text-center bg-black dark:bg-white text-white dark:text-black w-full p-4 disabled:bg-white/5 disabled:w-[30%] transition-width transition-slowest duration-500 ease"
        >
          <h5>{textField}</h5>
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
