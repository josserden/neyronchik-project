import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { FC, Fragment, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const locales = [
  { name: 'ua', id: 'uk' },
  { name: 'en', id: 'en' },
];

export const LangToggle: FC = () => {
  const router = useRouter();
  const [selected] = useState<string | undefined>(router.locale);

  const handleLocaleChange: (value: string) => void = ({ id }: any): void => {
    router.push(router.route, router.asPath, {
      locale: id,
    });
  };

  return (
    <Listbox value={selected} onChange={handleLocaleChange}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="relative flex items-center justify-center gap-1 p-1">
            <span className="truncate text-sm font-light uppercase leading-[21px] tracking-thick text-neutral-900 ">
              {selected === 'uk' ? 'ua' : selected}
            </span>

            <span className="pointer-events-none inset-y-0 right-0 flex items-center pr-2">
              <BsChevronDown
                className={`h-3 w-3 text-neutral-900 transition-transform ${
                  open && 'rotate-180'
                }`}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="toggle absolute left-0 z-10 grid h-16 w-full grid-cols-1 gap-1 overflow-auto py-2 pl-2 pr-1.5 text-sm font-light uppercase leading-[21px] tracking-thick text-neutral-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {locales.map(locale => (
                <Listbox.Option
                  id={locale.id}
                  key={locale.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none text-center uppercase transition-colors ${
                      active && 'text-sky-700'
                    }`
                  }
                  value={locale}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate uppercase ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {locale.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
