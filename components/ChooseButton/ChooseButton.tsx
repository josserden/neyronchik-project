import { FC } from 'react';
import { Tab } from '@headlessui/react';
import s from './ChooseButton.module.css';
import { ChooseBottonProps } from './ChooseButton.props';

import BlueHand from '@/public/images/choose-button/blue-hand.svg';
import RedHand from '@/public/images/choose-button/red-hand.svg';
import YellowHand from '@/public/images/choose-button/yellow-hand.svg';

const chooseBtn = [
  { id: '1', icon: <BlueHand />, text: 'Якісне консультування' },
  { id: '2', icon: <RedHand />, text: 'Швидкий зворотній звʹязок' },
  {
    id: '3',
    icon: <BlueHand />,
    text: 'Забезпечуємо Безперервну Систему Занять',
  },
  {
    id: '4',
    icon: <YellowHand />,
    text: 'Індивідуальний підхід до кожної сімʹї (дитини)',
  },
  { id: '5', icon: <RedHand />, text: 'Присутність батьків на занятті' },
  { id: '6', icon: <BlueHand />, text: 'Розробляємо план корекції для дитини' },
  {
    id: '7',
    icon: <YellowHand />,
    text: 'Підвищення кваліфікації спеціалістів',
  },
  { id: '8', icon: <RedHand />, text: '15 років досвіду' },
];

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const ChooseButton: FC = () => {
  return (
    <>
      <Tab.Group as="div" className="relative mx-auto sm:px-0">
        <Tab.Panels className="z-1 absolute top-[4px] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-[50%] border border-white bg-[#fffbeb] p-3 px-[52px] py-[89px] focus:outline-none">
          {chooseBtn.map(({ id, text }: ChooseBottonProps) => (
            <Tab.Panel key={id}>{text}</Tab.Panel>
          ))}
        </Tab.Panels>

        <Tab.List className={`${s.ring} z-30 mx-auto h-[249px] w-[249px]`}>
          {chooseBtn.map(({ id, icon }: ChooseBottonProps) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  `z-20 focus:outline-none ${s.icon}`,

                  selected ? 'scale-105' : 'text-blue-100',
                )
              }
            >
              {icon}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};
// bg-[#fffbeb]
