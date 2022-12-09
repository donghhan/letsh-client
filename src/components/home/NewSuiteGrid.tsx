import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import * as car from "../../assets/car.png";
import * as hotel from "../../assets/hotel.png";
import * as room from "../../assets/room.png";
import * as parking from "../../assets/parking.png";
import * as house from "../../assets/house.png";

export default function NewSuiteGrid() {
  const { t } = useTranslation();
  const items = [
    {
      id: "rooms",
      caption: t("home:rooms_caption"),
      src: room,
    },
    {
      id: "houses",
      caption: t("home:houses_caption"),
      src: house,
    },
    {
      id: "hotel",
      caption: t("home:hotel_apartments_caption"),
      src: hotel,
    },
    {
      id: "parking",
      caption: t("home:parking_caption"),
      src: parking,
    },
    {
      id: "transportation",
      caption: t("home:transportation_caption"),
      src: car,
    },
  ];

  return (
    <Grid
      templateColumns={{
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={{
        base: "4em",
        sm: "3.5em",
        lg: "1em",
      }}
      width="100%"
      marginTop="1em"
      justifyContent="center"
    >
      {items.map(({ id, caption, src }) => {
        return (
          <GridItem key={id} width="100%" height="100%" justifyContent="center">
            <Box
              width="100%"
              height="100%"
              borderTopLeftRadius="50px"
              borderBottomRightRadius="50px"
              overflow="hidden"
            >
              <Image
                src={src.default}
                alt={caption}
                width="100%"
                height="100%"
                transition="transform .2s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
            <Text textAlign="center" fontWeight="bold" mt={{ base: "1em" }}>
              {caption}
            </Text>
          </GridItem>
        );
      })}
    </Grid>
  );
}
