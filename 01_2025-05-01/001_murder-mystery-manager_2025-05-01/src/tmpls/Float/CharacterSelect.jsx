import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ButtonCard from '../../components/common/ButtonCard';
import FloatingContainer from '../../components/pageStyles/FloatingContainer';
import { textStyles, titleStyles } from '../../styles/baseStyles';

function CharacterSelect({ data }) {

  const meta = data.meta;
  const characters = data.characters;
  const coverImg = data.meta.coverImg;

  const navigate = useNavigate();

  return (
    <FloatingContainer fillScreen>
      <Box
        component="div"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 2,
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        {characters.map((character) => (
          character.isPlayer && <ButtonCard
            coverImg={character.charImg}
            title={<>{character.transcribedName} ({character.name})</>}
            titleStyles={titleStyles}
            text={character.description}
            textStyles={textStyles}
            handleClick={() => navigate(`/${meta.englishLabel}/confirmation/${character.id}`)}
            key={character.id}
          />
        ))}
        <ButtonCard
          coverImg={coverImg}
          title="ゲーム進行（GM・傍観者画面）"
          text="GM や傍観者はこちら"
          titleStyles={titleStyles}
          textStyles={textStyles}
          handleClick={() => navigate(`/${meta.englishLabel}/confirmation/${meta.id}`)}
          key={meta.id}
        />
      </Box>
    </FloatingContainer>
  );
}

export default CharacterSelect;