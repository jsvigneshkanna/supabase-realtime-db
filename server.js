import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const table1Subscription = supabase
  .from("*")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();
const { data, error } = await supabase
  .from("realtime_demo")
  .insert([{ name: "someValue", amount: 42 }]);

console.log(table1Subscription);
