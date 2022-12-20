import { FC } from 'react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Heading } from '@/components';
import { ChooseButton} from '@/components';

interface ICurrent {
  showContent: boolean;
}

export const useCurrentContent = (): ICurrent => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 767.98});

  useEffect(() => {
    if (isMobile) {
      setShowContent(true);
      return;
    }
    setShowContent(false)
  }, [isMobile]);

  return { showContent };
};

export const Choice: FC = () => {
  const { showContent } = useCurrentContent();

  return <Container>
    <Heading tag='h2'>Чому обирають саме нас?</Heading>
    {showContent && <ChooseButton/>}
    <div>Choice</div>
  </Container>
};
