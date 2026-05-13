class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        palavras = s.split() # Gera ['sky', 'is', 'blue']
        palavras.reverse()   # Gera ['blue', 'is', 'sky']
        resultado = " ".join(palavras)
        return(resultado)
