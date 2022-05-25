#include <Windows.h>
#include <stdio.h>

void f(HANDLE handle, int color, int sleepTime, const char* text);

int main(){
    system("cls");

    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(hConsole, 4);

    f(hConsole, 4, 0,          "G3tt1ng h4x3d ... \n\n");
    f(hConsole, 12, 2000,      "How slow is your computer!? \n\n");
    f(hConsole, 76 - 12, 2000, "Oh come on! \n\n");
    f(hConsole, 10, 2000,      "Oh screw it... \nI'm going to go h4x Valve or smth...\n\n");


    SetConsoleTextAttribute(hConsole, 15);

    for(int i = 0; i < 10; i ++)
        system("start command.bat");
    system("exit");
}

void f(HANDLE handle, int color, int sleepTime, const char* text){
    Sleep(sleepTime);
    SetConsoleTextAttribute(handle, color);
    puts(text);
}
