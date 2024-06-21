using System.Diagnostics;

namespace NumeriPrimiCalc
{
    internal class Program
    {
        /// <summary>
        /// Stampa tutti i numeri primi da <strong>2</strong> fino al numero specificato nel parametro <strong>upperBound</strong>.
        /// </summary>
        /// <param name="upperBound">Limite superiore dell'intervallo da considerare per l'estrazione dei numeri primi.</param>
        private static void Primes(int upperBound)
        {
            Console.Write("2 3 5 7");
            for (int i = 11; i < upperBound; i += 2)
            {
                bool prime = true;
                for (int j = 3; j < Math.Sqrt(i); j += 2)
                { 
                    if (i%j == 0) 
                    {
                        prime = false;
                        break;
                    }
                }
                if (prime) { Console.Write($" {i}"); }
            }
        }
        static void Main(string[] args)
        {
            // un cronometro
            Stopwatch sw = new Stopwatch();
            // attiva il cronometro
            sw.Start();
            // esegue il metodo da misurare
            Primes(10000);
            // ferma il cronometro
            sw.Stop();
            // stampa il tempo trascorso
            Console.WriteLine($"Execution time: {sw.ElapsedMilliseconds} ms");
        }
    }
}
