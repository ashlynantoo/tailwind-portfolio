const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="flex justify-center">{icon}</span>
      <h4 className="mt-4 font-bold flex justify-center">{title}</h4>
      <p className="mt-2 text-slate-500 text-justify">{text}</p>
    </article>
  );
};

export default SkillsCard;
