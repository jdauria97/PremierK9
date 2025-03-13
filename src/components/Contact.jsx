import Heading from "./Heading";
import Section from "./Section";

const Contact = () => {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
        className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg"
          title="Dog Training Questionnaire"
        />
        <div className="flex flex-wrap justify-evenly gap-10 mb-10">
        <div className="block relative p-0.5 bg-slate-500 rounded-lg">
          <form>
            <div className="mb-4">
            <label className="block">Basic Information</label>
            <input type="text" className="border border-gray-300 py-2 px-4 rounded-lg w-full" placeholder="Answer Here" />
            </div>
          </form>
        </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
