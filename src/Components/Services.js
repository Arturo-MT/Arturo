import React from "react";
import { FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import {
  MdDesignServices, MdOutlineSupport, MdOutlineWork
} from "react-icons/md";
import { RiSpaceShipFill } from "react-icons/ri";
import { FormattedMessage } from "react-intl";
import WhatIDoCard from "./Subcomponents/WhatIDoCard";

function Services() {
  return (
    <div id="services" className="mt-24">
        <h2 className="divideH2 my-8 text-3xl text-white font-bold text-center relative">
          <FormattedMessage id="services-header" defaultMessage="" />
        </h2>
        <div className="servicesContainer mx-auto max-w-5xl rounded px-6 pt-8 pb-4 backdrop-blur-md bg-black/40">
          <div className="servicesContainer grid grid-cols-3">
            <WhatIDoCard
              title={
                <FormattedMessage
                  id="services-webDev--title"
                  defaultMessage=""
                />
              }
              description={
                <FormattedMessage
                  id="services-webDev--description"
                  defaultMessage=""
                />
              }
            >
              <FaLaptopCode size={40} />
            </WhatIDoCard>
            <WhatIDoCard
              title={
                <FormattedMessage
                  id="services-webDesign--title"
                  defaultMessage=""
                />
              }
              description={
                <FormattedMessage
                  id="services-webDesign--description"
                  defaultMessage=""
                />
              }
            >
              <MdDesignServices size={40} />
            </WhatIDoCard>
            <WhatIDoCard
              title={
                <FormattedMessage
                  id="services-worker--title"
                  defaultMessage=""
                />
              }
              description={
                <FormattedMessage
                  id="services-worker--description"
                  defaultMessage=""
                />
              }
            >
              <MdOutlineWork size={40} />
            </WhatIDoCard>
            <WhatIDoCard
              title={
                <FormattedMessage
                  id="services-innovate--title"
                  defaultMessage=""
                />
              }
              description={
                <FormattedMessage
                  id="services-innovate--description"
                  defaultMessage=""
                />
              }
            >
              <RiSpaceShipFill size={40} />
            </WhatIDoCard>
            <WhatIDoCard
              title={
                <FormattedMessage
                  id="services-creativeDesign--title"
                  defaultMessage=""
                />
              }
              description={
                <FormattedMessage
                  id="services-creativeDesign--description"
                  defaultMessage=""
                />
              }
            >
              <FaPaintBrush size={40} />
            </WhatIDoCard>
            <WhatIDoCard
              title={
                <FormattedMessage
                  id="services-quickSupport--title"
                  defaultMessage=""
                />
              }
              description={
                <FormattedMessage
                  id="services-quickSupport--description"
                  defaultMessage=""
                />
              }
            >
              <MdOutlineSupport size={40} />
            </WhatIDoCard>
          </div>
        </div>
    </div>
  );
}

export default Services;
