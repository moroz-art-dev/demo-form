import {selectRegistrationTexts} from '@features/registration';
import {Sidebar} from '@layout/Sidebar';
import {useAppSelector} from '@redux/hooks';
import {Typography} from 'antd';
const {Title} = Typography;

const SectionSidebar: React.FC = () => {
  const profileTitle = useAppSelector(state =>
    selectRegistrationTexts(state, 'profileTitle')
  );
  const profileIntro = useAppSelector(state =>
    selectRegistrationTexts(state, 'profileIntro')
  );

  return (
    <Sidebar width={600} backgroundImage={'/images/sidebar.svg'}>
      <Title level={2}>{profileTitle}</Title>
      <Title level={5}>{profileIntro}</Title>
    </Sidebar>
  );
};

export default SectionSidebar;
