import { FC, Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { BsChevronDown } from 'react-icons/bs';
import s from './LangToggle.module.css';

const locales = [
  { name: 'ua', id: 'uk' },
  { name: 'en', id: 'en' },
];

export const LangToggle: FC = () => {
  const router = useRouter();
  const [selected] = useState<string | undefined>(router.locale);

  const handleLocaleChange: (value: string) => void = ({ id }: any): void => {
    // FIXME: value type  and any type in handleLocaleChange function
    router.push(router.route, router.asPath, {
      locale: id,
    });
  };

  return (
    <Listbox value={selected} onChange={handleLocaleChange}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className={s.listBoxBtn}>
            <span className={s.listBoxText}>
              {selected === 'uk' ? 'ua' : selected}
            </span>

            <span className={s.listBoxIcon}>
              <BsChevronDown
                className={`${s.listBoxIcon} ${open && 'rotate-180'}`}
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
            <Listbox.Options className={classNames(s.listboxOptions, 'toggle')}>
              {locales.map(locale => (
                <Listbox.Option
                  id={locale.id}
                  key={locale.id}
                  className={({ active }) =>
                    `${s.listBoxOption} ${active && 'text-sky-700'}`
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
