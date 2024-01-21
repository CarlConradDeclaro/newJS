 import java.util.*;
class Solution {
        public static void main(String[] args){
        

       int[] nums ={1,1,1,2,2,3};
        int k=2;

        HashMap<Integer,List<Integer>> hash = new HashMap<>(); 
        String s =""; 

      
        
        for(int i=0;i<nums.length;i++){           
             if(!hash.containsKey(nums[i]))
                 hash.put(nums[i],  new ArrayList<>());          
                     hash.put(nums[i], new ArrayList<>());
        }    

        
    }
 
    
}
