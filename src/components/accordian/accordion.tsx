'use client'

import cn from 'clsx'
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { CustomIcon } from '../ui/custom-icon';

type AccordionProps = {
  className?: string;
  gap?: number;
  children: React.ReactNode;
}

type AccordionTabProps = {
  title: string;
  tabClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children, className, gap }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <>
            <button
              className={
                (child as React.ReactElement<AccordionTabProps>).props.tabClassName
                  ?? `hover-animation min-h-[5.5rem] bg-[#2d2d2d] hover:bg-neutral-600
                      flex flex-row items-center px-7 w-full`
              }
              onClick={() => handleTabClick(index)}
            >
              <p className='font-NetflixSans text-2xl'>{(child as React.ReactElement<AccordionTabProps>).props.title}</p>
              {activeTab === index ? (
                <CustomIcon className='ml-auto w-12 h-12' iconName="XMarkIcon" />
              ) : (
                <CustomIcon className='ml-auto w-12 h-12' iconName="PlusIcon" />
              )}
            </button>
            <motion.div
              className={'overflow-hidden'}
              style={{
                marginBottom: gap ?? '0px'
              }}
              initial={{
                height: "0px"
              }}
              animate={{
                height: activeTab === index ? "auto" : "0px"
              }}
              transition={{
                duration: activeTab === index ? 0.2 : 0.3
              }}
            >
              {child}
            </motion.div>
          </>
        ) : null
      )}
    </div>
  );
};

const AccordionTab: React.FC<AccordionTabProps> = ({ className, children }) => {
  return (
    <div
      className={
        className ?? `flex flex-col bg-[#2d2d2d] border-t border-black text-2xl
                      gap-6 p-6`
      }
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionTab };