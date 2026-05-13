class Solution(object):
    def multiplicacao(self,nums,index):
        n = len(nums) #tamanho do array
        multiplicador = 1
        for i in range(n):
            if(i == index):
                pass
            else:
                multiplicador = multiplicador * nums[i]
            
        return(multiplicador)

    def check_zero(self,nums):
        n = len(nums) #tamanho do array
        booleano = False
        for i in range(n):
            if(nums[i] == 0):
                booleano = True
        
    
        return(booleano)
                
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(nums) #tamanho do array
        if(self.check_zero(nums) == False):

            multiplicador = 1
            for i in range(n):
                multiplicador = multiplicador * nums[i] 
            
            result = [0] * n
            for i in range(n):
                result[i] = multiplicador // nums[i]
            
            return(result)
        else:
            result = [0] * n
            for i in range(n):
                if(nums[i] == 0):
                    result[i] = self.multiplicacao(nums,i)
                else:
                    pass
            return(result)
