const PrimaryButton = ({ textField }: any) => {
  return (
    <>
      <button className="rounded-full bg-black dark:bg-white text-white dark:text-black w-full p-4">
        <h5>{textField}</h5>
      </button>
    </>
  );
};

export default PrimaryButton;
