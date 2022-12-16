import { FC } from 'react';
import { IconBtn } from '@/components';
import { useSessionStorage } from '@/hooks';
import s from './Banner.module.css';
import { BannerProps } from './Banner.props';

export const Banner: FC<BannerProps> = ({ children, ...props }) => {
  const { isHidden, handleClick } = useSessionStorage();

  return (
    <>
      {isHidden && (
        <div className={s.banner} {...props}>
          <div className={s.bannerWrapper}>
            <strong className={s.bannerText}>{children}</strong>
            <IconBtn appearance="white" variant="close" onClick={handleClick} />
          </div>
        </div>
      )}
    </>
  );
};
