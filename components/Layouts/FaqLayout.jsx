import Accordion from "../accordions/Accordion";
import SectionHeading from "../typos/SectionHeading";

function FaqLayout({ data }) {
  return data?.length > 0 ? (
    <section className={`container py-10 lg:py-16`}>
      <div className="flex flex-col gap-1 rounded-[0.625rem] bg-white">
        <SectionHeading
          heading={"FAQs"}
          baseText={"People wants to know"}
          className={"items-center"}
        />

        <div className="flex flex-col gap-4 lg:m-0">
          {data.map((faq) => (
            <div key={faq.id}>
              <Accordion data={faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default FaqLayout;
