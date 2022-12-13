import { forwardRef, useStyleConfig, chakra } from "@chakra-ui/react";
import { StyledButtonProps } from "../../utils/interface";

const StyledButton = forwardRef<StyledButtonProps, "button">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("StyledButton", { size, variant });
  return <chakra.button ref={ref} __css={styles} {...rest} />;
});

export default StyledButton;
