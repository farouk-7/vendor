import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import back from "../assets/back.png/";
import { _COLORS } from "../constants/colors";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import wave from "../assets/wave.png";
import { useLocation } from "react-router-dom";
import { getPageTitle } from "../utils/GetPageTitle";
import { clearLocalStorage, getLocalStorageItem } from "../utils/localStorage";
import { APP_CONSTANTS } from "../constants/app";

const CardHeader = ({ children }) => {
  const user = getLocalStorageItem(APP_CONSTANTS.user);

  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Box
      w={"full"}
      height={"300px"}
      bg={"#7B5DD6"}
      bgImage={wave}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      p={"20px"}
      borderRadius={"10px"}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Box>
          <Flex gap={"15px"} align={"start"}>
            <Box bg={"white"} p={"7px"} borderRadius={"4px"}>
              <Image src={back} />
            </Box>

            <Box color={"#fff"}>
              <Text>Pages/</Text>

              <Text fontWeight={"semibold"}> {getPageTitle(pathname)}</Text>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex align={"center"} gap={"30px"}>
            <Box>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <BiSearch color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  bg={_COLORS.white}
                  borderRadius={"20px"}
                  focusBorderColor="#7B5DD6"
                />
              </InputGroup>
            </Box>
            <Flex color={_COLORS.white} align={"center"} gap={"5px"}>
              <FaUser color={_COLORS.white} />
              <Text fontWeight={500}>User</Text>
            </Flex>
            <Text
              color={_COLORS.white}
              fontWeight={500}
              cursor={"pointer"}
              onClick={() => {
                clearLocalStorage();
                window.location.reload();
              }}
            >
              sign out
            </Text>
            <Box>
              <IoSettingsSharp color={_COLORS.white} />
            </Box>
            <Box>
              <FaBell color={_COLORS.white} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      {children}
    </Box>
  );
};

export default CardHeader;
