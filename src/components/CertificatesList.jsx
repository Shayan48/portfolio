import { Grid } from "@mui/material";
import { supabase } from "../supabaseClient";
import Certificate from "./Certificate";

const certificateFiles = [
  "AI_certi.PNG",
  "django_cert.png",
  "edu_certi.PNG",
];

const CertificatesList = () => {
  return (
    <Grid container spacing={3}>
      {certificateFiles.map((file, index) => {
        const { data } = supabase.storage
          .from("certificates")
          .getPublicUrl(file);

        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Certificate ImgSertif={data.publicUrl} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CertificatesList;
