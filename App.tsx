import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, GluestackUIProvider, Heading, Input, InputField, Text } from '@gluestack-ui/themed';
import { useState } from 'react';

export default function App() {
  const [idade,setIdade] = useState("18")
  const [resultado,setResultado] = useState("")
  return (
    <GluestackUIProvider config={config}>
      <Box bg='$blueGray400' h={'$full'} justifyContent='center' alignItems='center'>
        <Heading>Maior ou Menor</Heading>

      <FormControl w={'$full'} px={"$5"}>
        <FormControlLabel>
          <FormControlLabelText>Idade</FormControlLabelText>
        </FormControlLabel>
        <Input>
        <InputField placeholder='Exemplo: 18'/>
        </Input>
        <Button mt={'$2'}>
          <ButtonText>Calcular</ButtonText>
        </Button>
      </FormControl>

      <Text>Etec - Murillo</Text>
      
      </Box>
    </GluestackUIProvider>
  );
}
