import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { AccordionData } from "./../libs/data.ts";

// Style CSS
import "./AccordionStyle.css";
import SmallArrow from "./icons/SmallArrow";

const AnchorIcon = (props) => {
  return (
    <div className="icon-accordion">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 26.125C15.7016 26.125 15.4155 26.0065 15.2045 25.7955C14.9935 25.5845 14.875 25.2984 14.875 25L14.875 9.71499L10.795 13.795C10.5818 13.9937 10.2997 14.1019 10.0082 14.0967C9.71678 14.0916 9.4387 13.9735 9.23258 13.7674C9.02646 13.5613 8.90839 13.2832 8.90325 12.9918C8.89811 12.7003 9.00629 12.4182 9.20501 12.205L15.205 6.20499C15.416 5.99431 15.7019 5.87598 16 5.87598C16.2981 5.87598 16.5841 5.99431 16.795 6.20499L22.795 12.205C22.9937 12.4182 23.1019 12.7003 23.0968 12.9918C23.0916 13.2832 22.9736 13.5613 22.7674 13.7674C22.5613 13.9735 22.2832 14.0916 21.9918 14.0967C21.7003 14.1019 21.4183 13.9937 21.205 13.795L17.125 9.71499L17.125 25C17.125 25.2984 17.0065 25.5845 16.7955 25.7955C16.5845 26.0065 16.2984 26.125 16 26.125Z"
          fill="#673ECD"
        />
        <circle
          cx="16"
          cy="16"
          r="15.5"
          transform="rotate(-90 16 16)"
          stroke="#673ECD"
        />
      </svg>
    </div>
  );
};

export default function App() {
  return (
    <Accordion className="accordion" defaultExpandedKeys={["1"]}>
      {AccordionData?.map(({ id, title, preTitle, content }) => (
        <AccordionItem
          key={id}
          aria-label={title}
          title={<span className="text-2xl">{title}</span>}
          indicator={<AnchorIcon />}
          subtitle={
            <span className="text-sm text-[color:var(--accent)] ">
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
