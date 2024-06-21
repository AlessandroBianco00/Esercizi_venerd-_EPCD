using System;
using System.Runtime.ConstrainedExecution;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CalcolatoreImposta
{
    internal class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.Clear(); // Pulisco la console dai dati precedenti
                Console.WriteLine("===============CALCOLO IRPEF==============");
                Console.WriteLine("Inserisci i tuoi dati per sapere l'ammontare di tasse da pagare");

                Console.WriteLine("Inserisci il tuo nome");
                string myName = Console.ReadLine();

                Console.WriteLine("Inserisci il tuo cognome");
                string mySurname = Console.ReadLine();

                DateOnly date = default; // Dichiaro variabile esternamente al try perchè possa essere inserita nel costruttore
                try
                {
                    Console.WriteLine("Anno di nascita");
                    int birtYear = int.Parse(Console.ReadLine());
                    if (birtYear < 1999 || birtYear > 2024) { throw new Exception("Inserire un anno di nascita valido (>1900)"); }
                    Console.WriteLine("Mese di nascita");
                    int birthMonth = int.Parse(Console.ReadLine());
                    Console.WriteLine("Giorno di nascita");
                    int birthDay = int.Parse(Console.ReadLine());
                    date = new DateOnly(birtYear, birthMonth, birthDay);
                }
                //Effettuo 3 catch diversi, principalmente per controllare che l'input sia un int e poi per valutare che abbia valore valido per la data + 1 errori generici 
                catch (FormatException)
                {
                    Console.WriteLine("Errore: Formato di input non valido. Assicurati di inserire numeri interi per anno, mese e giorno");
                    Console.WriteLine("Premi invio per ricominciare");
                    Console.ReadLine(); // Blocco il codice per permette la lettura dell'errore
                    continue;
                }
                catch (ArgumentOutOfRangeException)
                {
                    Console.WriteLine("Errore: Data di nascita non valida. Assicurati che anno, mese e giorno siano valori validi.");
                    Console.WriteLine("Premi invio per ricominciare");
                    Console.ReadLine();
                    continue;
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Errore: {ex.Message}");
                    Console.WriteLine("Premi invio per ricominciare");
                    Console.ReadLine();
                    continue;
                }
                Sesso myGender = default; // Dichiaro variabile esternamente al try perchè possa essere inserita nel costruttore
                Console.Write("Gender (M/F): ");
                try
                    //Controllo che myGender abbia un valore valido (M o F)
                {
                    myGender = (Sesso)Enum.Parse(typeof(Sesso), Console.ReadLine(), true);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Errore: {ex.Message}");
                    Console.WriteLine("Premi invio per ricominciare");
                    Console.ReadLine();
                    continue;
                }
                Console.WriteLine("Luogo di residenza");
                string myComune = Console.ReadLine();
                Console.WriteLine("Inserisci Codice Fiscale");
                string myCodiceFisc = Console.ReadLine();
                Console.WriteLine("Reddito Dichiarato");
                int mySalary = 0; // Dichiaro variabile esternamente al try perchè possa essere inserita nel costruttore
                try
                    //Controllo che l'input sia effettivamente un int e valuto che il valore inserito non sia negativo
                {
                    mySalary = int.Parse(Console.ReadLine());
                    if (mySalary < 0) { throw new Exception("Reddito non può essere negativo"); } 
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Errore: {ex.Message}");
                    Console.WriteLine("Premi invio per ricominciare");
                    Console.ReadLine(); // Blocco il codice per permette la lettura dell'errore
                    continue;
                }

                Console.WriteLine("========================================");

                Contribuente contribuente1 = new Contribuente(myName, mySurname, date, myGender, myComune, myCodiceFisc, mySalary);
                // Mostro a schermo i dati inseriti
                Console.WriteLine("Scheda dati");
                Console.WriteLine($"Contribuente: {contribuente1.Name} {contribuente1.Surname},");
                Console.WriteLine($"Nato il: {contribuente1.BirthDate} ({contribuente1.Gender}),");
                Console.WriteLine($"Residente a: {contribuente1.ComuneResidenza},");
                Console.WriteLine($"Codice Fiscale: {contribuente1.CodiceFiscale}");
                Console.WriteLine($"Declared income: {contribuente1.AnnualSalary}");
                Console.WriteLine($"La tua imposta di reddito per quest'anno è di {contribuente1.PayTaxes()}");
                Console.WriteLine("========================================");
                Console.ReadLine(); //Dopo l'input riparte la lettura del main

            }
        }
    }
}
