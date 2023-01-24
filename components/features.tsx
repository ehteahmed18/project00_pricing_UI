import { HStack, Icon, Text, StackProps, Box, Flex ,Stack} from "@chakra-ui/react";
import React, { ElementType } from "react";
import { MoneyBackIcon, HassleFreeIcon, MonthlySubIcon } from "../icons/icons";


interface FeatureProps extends StackProps {
    icon: ElementType;
}
export function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='6'>
            <Icon as={icon} boxSize='12' />
            <Text textAlign={['left','left','center']} fontSize='lg' fontWeight='bold'>{children}</Text>
        </HStack>
    )
}


export function Features() {
    return (
        
        <Box maxWidth={'1024px'} pt={'60px'} pb='32px' margin="auto" flexDirection={['column','column','row']}>
                <Stack px={'48px'} spacing={{base: '6', lg: '5'}} direction={["column","column","row"]}>
                    <Feature icon={MoneyBackIcon}>30 days money back Guarantee</Feature>
                    <Feature icon={HassleFreeIcon}>No setup fees <br />100% hassle-free</Feature>
                    <Feature icon={MonthlySubIcon}>No monthly subscription <br /> Pay once and for all</Feature>
                </Stack>
            
        </Box>
        

    )
}