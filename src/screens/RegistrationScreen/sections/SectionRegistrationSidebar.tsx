import {
  selectRegistrationLists,
  selectRegistrationTexts,
} from '@features/registration';
import {Sidebar} from '@layout/Sidebar';
import {useAppSelector} from '@redux/hooks';
import {List, Typography} from 'antd';
import {RegistrationList} from 'types';
const {Title} = Typography;

const SectionSidebar: React.FC = () => {
  const memoizedTextTitle = useAppSelector(state =>
    selectRegistrationTexts(state, 'title')
  );
  const memoizedTextIntro = useAppSelector(state =>
    selectRegistrationTexts(state, 'intro')
  );
  const memoizedListAdvances = useAppSelector<RegistrationList>(state =>
    selectRegistrationLists(state, 'advances')
  );

  return (
    <Sidebar width={600} backgroundImage={'/images/sidebar.svg'}>
      <Title>{memoizedTextTitle}</Title>
      <Title level={5}>{memoizedTextIntro}</Title>
      <List
        style={{marginTop: 72}}
        grid={{gutter: 16, column: 2}}
        dataSource={memoizedListAdvances}
        renderItem={item => (
          <List.Item
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: 24,
            }}>
            <img
              style={{marginRight: '8px'}}
              src='/images/tick-square.svg'
              alt='tick'
            />
            {item.title}
          </List.Item>
        )}
      />
    </Sidebar>
  );
};

export default SectionSidebar;
