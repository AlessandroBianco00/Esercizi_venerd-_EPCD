using System;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CalcolatoreImposta
{
    internal class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.Clear();
                Console.WriteLine("===============CALCOLO IRPEF==============");
                Console.WriteLine("Inserisci i tuoi dati per sapere l'ammontare di tasse da pagare");

                Console.WriteLine("Inserisci il tuo nome");
                string myName = Console.ReadLine();

                Console.WriteLine("Inserisci il tuo cognome");
                string mySurname = Console.ReadLine();

                DateOnly date = default;
                try
                {
                    Console.WriteLine("Anno di nascita");
                    int birtYear = int.Parse(Console.ReadLine());
                    Console.WriteLine("Mese di nascita");
                    int birthMonth = int.Parse(Console.ReadLine());
                    Console.WriteLine("Giorno di nascita");
                    int birthDay = int.Parse(Console.ReadLine());
                    date = new DateOnly(birtYear, birthMonth, birthDay);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Errore: {ex.Message}");
                }
                Sesso myGender = default;
                try
                {
                    Console.Write("Gender (M/F): ");
                    myGender = (Sesso)Enum.Parse(typeof(Sesso), Console.ReadLine(), true);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Errore: {ex.Message}");
                }
                Console.WriteLine("Luogo di residenza");
                string myComune = Console.ReadLine();
                Console.WriteLine("Inserisci Codice Fiscale");
                string myCodiceFisc = Console.ReadLine();
                Console.WriteLine("Reddito Dichiarato");
                int mySalary = int.Parse(Console.ReadLine());

                Console.WriteLine("========================================");

                Contribuente contribuente1 = new Contribuente(myName, mySurname, date, myGender, myComune, myCodiceFisc, mySalary);
                Console.WriteLine("Scheda dati");
                Console.WriteLine($"Contribuente: {contribuente1.Name} {contribuente1.Surname},");
                Console.WriteLine($"Nato il: {contribuente1.BirthDate} ({contribuente1.Gender}),");
                Console.WriteLine($"Residente a: {contribuente1.ComuneResidenza},");
                Console.WriteLine($"Codice Fiscale: {contribuente1.CodiceFiscale}");
                Console.WriteLine($"Declared income: {contribuente1.AnnualSalary}");
                Console.WriteLine($"La tua imposta di reddito per quest'anno è di {contribuente1.PayTaxes()}");
                Console.WriteLine("========================================");
                Console.ReadLine();

            }
        }
    }
}
