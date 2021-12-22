import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://raewjdxelfkabzxxwzpy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE0Mzk2MSwiZXhwIjoxOTU1NzE5OTYxfQ.8myiriyhSV85_RBfiv2vGlJjnL31wD6tHa1obsffKX4';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  localStorage: AsyncStorage,
});
