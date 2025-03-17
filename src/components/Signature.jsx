import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { motion, useInView } from "framer-motion";

const Signature = () => {
  const canvasRef = useRef(null);
  const isInView = useInView(canvasRef);

  return (
    <motion.div
      ref={canvasRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ width: 500, height: 200 }}
    >
      <SignatureCanvas ref={canvasRef} penColor="black" canvasProps={{ className: "sigCanvas" }} />
    </motion.div>
  );
};

export default Signature;
