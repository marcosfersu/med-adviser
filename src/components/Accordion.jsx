import { Accordion, AccordionItem } from "@nextui-org/accordion";

// Style CSS
import "./AccordionStyle.css";
import SmallArrow from "./icons/SmallArrow";
import AnchorIcon from "./AnchorIcon";

export default function App({ accordionData }) {
  return (
    <Accordion className="accordion" defaultExpandedKeys={["1"]}>
      {accordionData?.map(({ id, title, preTitle, content }) => (
        <AccordionItem
          key={id}
          aria-label={title}
          title={<span className="text-2xl lora">{title}</span>}
          indicator={<AnchorIcon />}
          subtitle={
            <span className="text-sm text-[color:var(--accent)] lora">
              {preTitle}
            </span>
          }
          className="accordion-item"
        >
          <ul className="mb-4 flex flex-col gap-3 [&>div>p]:text-xl ">
            {content?.map((content, index) => (
              <li key={index} className="flex items-center gap-4">
                <SmallArrow />
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
