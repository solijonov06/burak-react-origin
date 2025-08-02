import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";

export default function FinishedOrders() {
   return (
      <TabPanel value={"3"}>
         <Stack>
            {[1].map((ele, index) => {
               return (
                  <Box key={index} className={"order-main-box"}>
                     <Box className="order-box-scroll">
                        {[1, 2, 3].map((ele2, index2) => {
                           return (
                              <Box key={index2} className={"order-name-price"}>
                                 <img
                                    src={"/img/lavash.webp"}
                                    className={"order-dish-img"}
                              />
                              <Stack sx={{ 
                                       width: 650,
                                       display: "flex",
                                       flexDirection: "row",
                                       justifyContent: "space-between",   
                                    }}>
                                       
                                    <p className={"title-dish"}>Lavash</p>
                                    <Box className={"price-box"}>
                                       <p>$9</p>   
                                       < img src={"/icons/close.svg"} />
                                       <p>2</p>
                                       < img src={"/icons/pause.svg"} />
                                       <p style={{marginLeft: "15px" }}>$24</p>
                                    </Box>
                                    </Stack>
                           </Box>
                           );
                        })}
                     </Box>

                     <Box className={"total-price-box"}>
                        <Box className={"box-total"}>
                           <p>Product price</p>
                           <p>$22</p>
                           <img src={"/icons/plus.svg"} style={{ marginLeft: "20px"}} />
                           <p>delivery cost</p>
                           <p>$2</p>
                           <img 
                              src={"/icons/pause.svg"}
                              style={{ marginLeft: "20px" }}
                           />
                           <p>Total</p> 
                           <p>$24</p>
                        </Box>
                     </Box>
                  </Box>
               );
            })}
            
            {false && (
               <Box display={"flex"} flexDirection={"row"} justify-content={"center"}>
                  <img 
                     src="/icons/noimage-list.svg"
                     style={{width: 300, height: 300 }}
                  />
               </Box>
            )}
         </Stack>
      </TabPanel>
   )
}

