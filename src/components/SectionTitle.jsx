const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-4 text-center md:text-left">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};

export default SectionTitle;
